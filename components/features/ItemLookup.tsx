import { useAppDispatch, useAppSelector } from "app/hooks";
import { action } from "app/slices/entities";
import { getActiveFactory } from "app/slices/factories";
import { getMapDetails } from "app/slices/ui";
import Button from "components/common/Button";
import Input from "components/common/Input";
import { items as originalItems } from "data";
import { useEffect, useRef, useState } from "react";

interface Proptypes {}

const ItemLookup = ({}: Proptypes) => {
  const [items, setItems] = useState(originalItems.produceItems);
  const [searchTerm, setSearchTerm] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | undefined>();
  const dispatch = useAppDispatch();
  const factory = useAppSelector(getActiveFactory)!;
  const mapDetails = useAppSelector(getMapDetails);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    if (!searchTerm) return setItems(originalItems.produceItems);
    timeoutRef.current = setTimeout(() => {
      const newItems = originalItems.produceItems!.filter(item => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setItems(newItems);
    }, 300);
  }, [searchTerm]);

  const onItemSelect = (item: string) => {
    const { height, width, mapScale: scale } = mapDetails;
    const x = width / scale / 2;
    const y = height / scale / 2;

    dispatch(
      action.createProductionStep({
        product: { item, amount: 20 },
        factory,
        location: { x, y },
      })
    );
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const renderItems = () => {
    return items!.map(item => (
      <Button key={item.id} colour="green" onClick={() => onItemSelect(item.id)}>
        {item.name}
      </Button>
    ));
  };

  return (
    <div className="grid grid-cols-1 grid-rows-[min-content,_minmax(0,_1fr)] w-full h-full gap-3 ">
      <div className="w-full h-full">
        <Input placeholder={"Search item..."} onChange={onSearch} value={searchTerm} />
      </div>
      <div className="flex flex-col gap-3 h-full overflow-y-auto">{renderItems()}</div>
    </div>
  );
};

export default ItemLookup;
