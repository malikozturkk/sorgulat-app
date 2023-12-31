import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Button from "components/DesignSystem/Button";
import Input from "components/DesignSystem/Input";
import Checkbox from "components/DesignSystem/Checkbox";
import Radio from "components/DesignSystem/Radio";
import MarketIndices from "components/FrontendComponents/MarketIndices";
import Container from "components/DesignSystem/Container";
import { useIsMobile } from "hooks/useIsMobile";
import Collapse from "components/DesignSystem/Collapse";

const HomePage = () => {
  const { t } = useTranslation("common");
  const [checkedOption, setCheckedOption] = React.useState("");
  const handleRadioChange = (optionValue) => {
    setCheckedOption(optionValue);
  };
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <>
      {!isMobile && <MarketIndices />}
      <Container>
        {isMobile && <MarketIndices />}
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
              <Collapse
                header={({ isOpen }) => (
                  <div>tıkla bana {isOpen ? "açık" : "kapalı"}</div>
                )}
              >
                Children
              </Collapse>
            </div>
          </div>
        </div>
        <div style={{ color: "#5340FF" }}>renk 1</div>
        <div style={{ color: "#646ECB" }}>renk 2</div>
        <div style={{ color: "#3F4BBD" }}>renk 3</div>
        <div style={{ color: "#8a92d8" }}>renk 4</div>
        <div style={{ color: "#2a2a2a" }}>renk 5</div>
        <div style={{ color: "#111111" }}>renk 6</div>
        <div style={{ color: "#F7F7F8" }}>renk 7</div>
      </Container>
    </>
  );
};

export default HomePage;
