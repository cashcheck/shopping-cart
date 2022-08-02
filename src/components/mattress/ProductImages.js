import image1 from "./images/1-og.jpg";
import image1TN from "./images/1-thumbnail.jpg";
import image2 from "./images/2-og.jpg";
import image3 from "./images/3-og.jpg";

function ProductImages() {
  const images = [
    {
      original: image1,
      thumbnail: image1TN,
      originalWidth: "500px",
      thumbnailWidth: "100px",
    },
    {
      original: image2,
      thumbnail: image1TN,
      originalWidth: "500px",
      thumbnailWidth: "100px",
    },
    {
      original: image3,
      thumbnail: image1TN,
      originalWidth: "500px",
      thumbnailWidth: "100px",
    },
  ];

  return (
    <div>
      <img src={image1} alt="product-image 1" />
    </div>
  );
}

export default ProductImages;
