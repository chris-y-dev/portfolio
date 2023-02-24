import MyWorkData from "../interfaces/MyWorkData";

export default function orderProjectsByCategory(
  workShowcaseData: MyWorkData[]
) {
  function sortWorkData(a: MyWorkData, b: MyWorkData) {
    const aNum = getOrderValue(a);
    const bNum = getOrderValue(b);

    return aNum - bNum;
  }

  function getOrderValue(x: MyWorkData) {
    if (x.isFeatured) return 1;

    switch (x.category) {
      case "software":
        return 2;
      case "mobile":
        return 3;
      case "web":
        return 4;
      default:
        return 4;
    }
  }

  return workShowcaseData.sort(sortWorkData);
}
