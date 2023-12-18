export interface FormDataProps {
  name: string;
  surname: string;
  livingAddress: string;
  phoneNumber: string;
  email: string;
}
export interface PurchaseFormProps {
  showModalStatus: boolean;
  setShowModalStatus: (boolean: boolean) => void;
  clearCart: () => void;
}
