import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Button from "components/DesignSystem/Button";
import Input from "components/DesignSystem/Input";
import Checkbox from "components/DesignSystem/Checkbox";
import Radio from "components/DesignSystem/Radio";
import Image from "next/image";
import MarketIndices from "components/FrontendComponents/MarketIndices";
import BankPromotion from "components/FrontendComponents/BankPromotion";

const HomePage = () => {
  const { t } = useTranslation("common");
  const [checkedOption, setCheckedOption] = React.useState("");
  const handleRadioChange = (optionValue) => {
    setCheckedOption(optionValue);
  };
  const router = useRouter();

  return (
    <>
      <MarketIndices />
      <BankPromotion />
      <div>
        {t("homepage.title")}
        <div>Homepage {router.locale}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 50,
            marginTop: 20,
          }}
        >
          <Button
            text="test button"
            size="large"
            shape="ghost"
            palette="red"
            disabled
          />
          <Input
            icon={
              <Image
                src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
                height={20}
                width={20}
                alt="test"
              />
            }
            placeholder="Ürün veya Kategori Ara"
            label="Ara"
            errorMessage="Sonuç bulunamadı"
            shape="default"
            status="error"
          />
          <div>
            Cinsiyet Seç
            <Checkbox label="erkek" />
            <Checkbox label="kadın" />
          </div>
          <div>
            <Radio
              label="erkek"
              checked={checkedOption === "option1"}
              onChange={() => handleRadioChange("option1")}
            />
            <Radio
              label="kadın"
              checked={checkedOption === "option2"}
              onChange={() => handleRadioChange("option2")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
