export interface IHeadingInterface {
  heading: string;
}

export interface IItemListInterface {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface ITodoFormPropInterface {
  itemList: IItemListInterface[];
  setItemList: any;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  tab: string;
}

export interface ITodoListPropInterface {
  itemList: IItemListInterface[];
  setItemList: any;
  tab: string;
}

export interface IMenuPropsInterface {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}
