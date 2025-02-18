document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.querySelector(".gallery");
    if (!galleryContainer) {
        console.error("Gallery container not found!");
        return;
    }

    const galleryItems = galleryContainer.querySelectorAll(".gallery-item");
    const indicator = document.querySelector(".indicator");

    const defaultItemFlex = "0 1 20px";
    const hoverItemFlex = "1 1 40vw";

    const updateGalleryItems = () => {
        galleryItems.forEach((item) => {
            const isHovered = item.dataset.isHovered === "true";
            item.style.flex = isHovered ? hoverItemFlex : defaultItemFlex;
        });
    };

    galleryItems.forEach((item) => {
        item.dataset.isHovered = "false";
        item.addEventListener("mouseenter", () => {
            galleryItems.forEach((otherItem) => {
                otherItem.dataset.isHovered = otherItem === item ? "true" : "false";
            });
            updateGalleryItems();
        });
    });

    galleryContainer.addEventListener("mousemove", (e) => {
        indicator.style.left = `${
            e.clientX - galleryContainer.getBoundingClientRect().left
        }px`;
    });

    galleryItems[0].dataset.isHovered = "true";
    updateGalleryItems();
});
