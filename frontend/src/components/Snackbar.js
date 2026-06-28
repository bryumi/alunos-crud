import { jsx as _jsx } from "react/jsx-runtime";
// components/SnackbarComponent.tsx
import { Snackbar, Alert } from '@mui/material';
export function SnackbarComponent({ open, message, type, onClose }) {
    return (_jsx(Snackbar, { open: open, autoHideDuration: 3000, onClose: onClose, anchorOrigin: { vertical: 'top', horizontal: 'right' }, children: _jsx(Alert, { onClose: onClose, severity: type, variant: "filled", children: message }) }));
}
