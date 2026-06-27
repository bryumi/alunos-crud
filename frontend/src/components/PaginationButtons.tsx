import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface BasicPaginationProps {
  count: number;
  onChange?: (event: React.ChangeEvent<unknown>, value: number) => void;
  page?: number;
}
export default function BasicPagination({ count, onChange, page }: BasicPaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination count={count} onChange={onChange} page={page} />
    </Stack>
  );
}
