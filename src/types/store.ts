export type LockScreenStore = {
  visible: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  handleVisible: (open: boolean) => void;
};
