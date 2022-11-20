import styled from "@emotion/styled";

export const ModalCard = styled.form`
  position: relative;
  max-width: 400px;
  margin: 0px auto;
  padding: 40px 20px;

  background-color: ${p => p.theme.colors.bgSecond};
  border-radius: 20px;
`

export const FormTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 24px;
  line-height: 1.375;
  text-align: center;
  color: ${p => p.theme.colors.textMain};
`

export const FormText = styled.p`
  margin-bottom: 20px;

  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.01em;
  text-align: center;
  color: ${p => p.theme.colors.textMain};
`

export const SelectCategory = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 12px;
  margin-bottom: 32px;
`

export const CategoryInput = styled.input`
  display: none;
`

export const CategoryLabel = styled.label`
  padding: 6px 26px;

  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};

  background-color: transparent;
  border-radius: 40px;
  border: 2px solid ${p => p.theme.colors.accent};
  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
   background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
   border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  input:checked + & {
    color: ${p => p.theme.colors.textSecond};
    background-color: ${p => p.theme.colors.accent};;
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.textSecond};
    background-color: ${p => p.theme.colors.hover};;
    border: 2px solid ${p => p.theme.colors.hover};
  }
`

export const InputList = styled.ul`
  display: grid;
  gap: 16px;
`

export const InputItem = styled.li`
  
`

export const FormInputLabel = styled.p`
  margin-bottom: ${p => p.indent === 'big' ? '16px' : '8px'};

  font-size: 18px;
  line-height: 1.44;
  color: ${p => p.theme.colors.textMain};
`

export const RequiredSymbol = styled.span`
  color: ${p => p.theme.colors.accent};
`

export const FormInput = styled.input`
  width: 100%;
  padding: 10px 16px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;

  background-color: ${p => p.theme.colors.bgMain};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  
  ::placeholder {
    color: ${p => p.theme.colors.placeholder};
  }

  :focus {
    outline: 1px solid ${p => p.theme.colors.accent};
  }
`

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 40px;
`

export const SelectSex = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 32px;
`

export const SexInput = styled.input`
  display: none;
`

export const SexLabel = styled.label`
  font-size: 18px;
  line-height: 1.44;
  color: ${p => p.theme.colors.black};

  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  input:checked + & {
    color: ${p => p.theme.colors.accent};
  }
`

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
`

export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  padding: 9px;

  background-color: ${p => p.theme.colors.bgMain};
  backdrop-filter: blur(2px);
  border-radius: 50%;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }
`