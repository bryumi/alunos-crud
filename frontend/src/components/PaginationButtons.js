import { jsx as _jsx } from "react/jsx-runtime";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function BasicPagination({ count, onChange, page }) {
    return (_jsx(Stack, { spacing: 2, children: _jsx(Pagination, { count: count, onChange: onChange, page: page }) }));
}
