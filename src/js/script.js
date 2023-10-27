const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalButton");
const successModal = document.getElementById("successModal");
const closeBtn = document.getElementById("closeModalButton");

// Ketika tombol dibuka, tampilkan modal
const handleOpenModal = () => {
  modal.style.display = "flex";
  modal.style.border = "2px solid black";
};

const handleYesBtn = () => {
  modal.style.display = "none";
  successModal.style.display = "flex";
};

const handleConfirmBtn = () => {
  window.location.href = "menu.html";
};

// Ketika tombol tutup di klik, sembunyikan modal
const handleCloseModal = () => {
  modal.style.display = "none";
};

// Ketika pengguna mengklik di luar modal, sembunyikan modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const handleBackToIndex = () => {
  window.location.href = "index.html";
};

const menuBtn = document.getElementById("menuBtn");
const menuItems = document.getElementById("menuItems");

menuBtn.addEventListener("click", () => {
  menuItems.classList.toggle("hidden");
});

const handleLogin = () => {
  window.location.href = "index.html";
};
