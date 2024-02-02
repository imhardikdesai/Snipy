import { useSearchParams } from "next/navigation";

const useQueryParams = (key: string) => {
  const searchParams = useSearchParams();
  const keyValue = searchParams.get(key);

  return keyValue || null;
};

export default useQueryParams;
