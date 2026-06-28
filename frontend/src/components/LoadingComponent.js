import { jsx as _jsx } from "react/jsx-runtime";
import { Backdrop, CircularProgress } from '@mui/material';
const LoadingComponent = () => {
    return (_jsx(Backdrop, { open: true, sx: {
            color: '#fff',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // leve overlay escuro
        }, className: "flex items-center justify-center w-full h-full", children: _jsx(CircularProgress, { color: "secondary", sx: { color: '#0d3b2e' }, size: "5rem" }) }));
};
export default LoadingComponent;
