import { create } from 'zustand';

const useFormStore = create((set) => ({
  formData: {
    name: '',
    address: '',
    preferences: [],
  },
  updateField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
}));

export default useFormStore;
