const number = [1, 2, 3, 4, 5];

const numberClass = document.querySelector(".number");
let selectedRating = null;
number.forEach((num) => {
  const button = document.createElement("lo");
  button.classList.add("rating-btn");
  button.textContent = num;
  numberClass.appendChild(button);

  button.addEventListener("click", () => {
    // ลบคลาส selected จากทุกปุ่ม
    document
      .querySelectorAll(".rating-btn")
      .forEach((btn) => btn.classList.remove("selected"));
    // เพิ่มคลาส selected ให้กับปุ่มที่ถูกคลิก
    button.classList.add("selected");
    selectedRating = num; // เก็บค่าคะแนนที่เลือก
    console.log(num);
  });
});

// เมื่อคลิกปุ่ม submit จะแสดงค่าคะแนนที่เลือกใน alert
const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener("click", () => {
    const thankYouMessage = document.querySelector('.cardd h6'); // เลือก <h6> ที่จะเปลี่ยนข้อความ
  if (selectedRating !== null) {
    thankYouMessage.textContent = `You selected ${selectedRating} out of 5`; // แสดงข้อความที่เลือกใน <h6>
    document.querySelector('.container').style.display = 'none'; // แสดงการ์ดขอบคุณ
    document.querySelector('.conthank').style.display = 'flex'; // แสดงการ์ดขอบคุณ
    // document
    //   .querySelectorAll(".rating-btn")
    //   .forEach((btn) => btn.classList.remove("selected"));
  } else {
    // thankYouMessage.textContent = "Please select a rating before submitting."; // หากไม่เลือกคะแนน
  }
});
