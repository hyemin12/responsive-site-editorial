import DefaultBtn from "./elements/Buttons/DefaultBtn";

const Pagenation = ({ pageLength, setPage, page }) => {
  const handlePrev = () => {
    if (page <= 1) return;
    setPage(page - 1);
    return false;
  };
  const handleNext = () => {
    console.log("다음페이지");
    if (page <= pageLength) return;
    setPage(page + 1);
    return false;
  };
  console.log(page);
  return (
    <div>
      <DefaultBtn
        type="button"
        text={"prev"}
        disabled={page === 1 ? true : false}
        onClick={handlePrev}
      />

      <DefaultBtn
        type="button"
        text={"next"}
        disabled={page === pageLength ? true : false}
        onClick={handleNext}
      />
    </div>
  );
};

export default Pagenation;
