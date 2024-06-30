import { useEffect } from "react";
import "./EditShareModal.css";
import { toast } from "sonner";
const EditShareModal = ({ setVisible, setIsDl, closeDots, _id }) => {
  const handleEditClick = () => {
    setVisible();
    closeDots();
  };

  const handleDeleteClick = () => {
    setIsDl();
    closeDots();
  };
  function handleShareClick() {
    copyUrlToClipboard();
    closeDots();
  }
  const copyUrlToClipboard = () => {
    const currentUrl = `https://pro-manage-kohl.vercel.app//share/${_id}`;
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          toast.success("url copied");
        })
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
        });
    } else {
      const tempInput = document.createElement("input");
      tempInput.value = currentUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      console.log("URL copied to clipboard (fallback)");
    }
  };

  return (
    <div className="editmodal-container">
      <div className="editmodal-content">
        <div onClick={handleEditClick}>Edit</div>
        <div onClick={handleShareClick}>Share</div>
        <div onClick={handleDeleteClick} style={{ color: "#CF3636" }}>
          Delete
        </div>
      </div>
    </div>
  );
};

export { EditShareModal };
