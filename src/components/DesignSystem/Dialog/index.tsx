import * as React from "react";
import { IDialog } from "./Dialog.types";
import ReactDOM from "react-dom";
import Close from "../../Icons/svg/close.svg";
import * as S from "./Dialog.styled";
import Button from "../Button";

const Dialog = (props: IDialog) => {
  const { title, open, onClose, footer, children } = props;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const Footer = () => {
    if (footer === undefined) {
      return (
        <S.Footer>
          <Button
            text="Tamam"
            size="default"
            shape="default"
            onClick={onClose}
            block={true}
            palette="rgb(100, 110, 203)"
          />
        </S.Footer>
      );
    }
    return footer ? <S.Footer>{footer}</S.Footer> : null;
  };
  return mounted && open
    ? ReactDOM.createPortal(
        <S.Main>
          <S.BackdropMain>
            <S.Backdrop onClick={onClose} />
          </S.BackdropMain>
          <S.ContentMain>
            <S.ChildrenMain>
              <S.Children>
                <S.TitleMain>
                  <S.Title>{title}</S.Title>
                </S.TitleMain>
                <S.Content>{children}</S.Content>
                {Footer()}
                <S.Close onClick={onClose}>
                  <Close width={24} height={24} />
                </S.Close>
              </S.Children>
            </S.ChildrenMain>
          </S.ContentMain>
        </S.Main>,
        document.body
      )
    : null;
};

export default Dialog;
