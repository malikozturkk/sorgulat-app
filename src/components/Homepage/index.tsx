import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Button from "components/DesignSystem/Button";
import Input from "components/DesignSystem/Input";
import Checkbox from "components/DesignSystem/Checkbox";

const HomePage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div>
      {t("homepage.title")}
      <div>Homepage {router.locale}</div>
      <Button
        text="test button"
        size="large"
        shape="default"
        palette="red"
        disabled
      />
      <Input
        icon={
          <img
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
            height={20}
            width={20}
          />
        }
        placeholder="Ürün veya Kategori Ara"
        label="Ara"
        errorMessage="Sonuç bulunamadı"
        shape="default"
        status="error"
      />
      Cinsiyet Seç
      <Checkbox label="erkek" />
      <Checkbox label="kadın" />
    </div>
  );
};

export default HomePage;
