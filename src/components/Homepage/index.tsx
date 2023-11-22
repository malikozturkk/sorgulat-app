import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Button from "components/DesignSystem/Button";

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
    </div>
  );
};

export default HomePage;
