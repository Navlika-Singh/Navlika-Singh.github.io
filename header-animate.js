<script>
  const header = document.getElementById('main-header');
  const englishName = "Navlika Singh";
  const hindiName = "नवलिका सिंह";

  header.addEventListener('mouseenter', () => {
    header.textContent = hindiName;
    header.style.color = "#e91e63"; // pink
  });

  header.addEventListener('mouseleave', () => {
    header.textContent = englishName;
    header.style.color = ""; // revert to default
  });
</script>
