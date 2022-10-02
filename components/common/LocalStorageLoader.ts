import { useAppDispatch } from "app/hooks";
import { fetchSavedFiles } from "app/slices/entities";
import { useEffect } from "react";

const LocalStorageLoader = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSavedFiles);
  }, []);
  return null;
};

export default LocalStorageLoader;
