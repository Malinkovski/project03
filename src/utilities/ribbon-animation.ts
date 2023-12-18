const PREFIX = ".";
const screenResolution = 2560 * 2; //?temp fix 

export const addInfiniteScrollAnimation = (
  container: string, // container class name
  child: string, // children class name
  /* width: number */
  ) => {
    const items = document.querySelectorAll(PREFIX + container);

  items.forEach((item) => {
    const itemInner = item.querySelector(PREFIX + child) as HTMLElement | null;

    if (itemInner) {
      const itemContent = Array.from(itemInner.children) as HTMLElement[];
      const childWidth = itemInner.offsetWidth;

      if (childWidth > 0) {
        const numberOfDuplicates = Math.ceil(screenResolution / childWidth);

        itemInner.innerHTML = "";

        for (let i = 0; i < numberOfDuplicates; i++) {
          itemContent.forEach((originalItem) => {
            const duplicatedItem = originalItem.cloneNode(true) as HTMLElement;
            itemInner?.appendChild(duplicatedItem);
          });
        }
      }
    }
  });
};
