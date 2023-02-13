<p id="copy-target">Text to be copied</p>

<div id="popup" style="display: none;">
  <p>Text copied! Check it out on <a href="https://twitter.com">Twitter</a>.</p>
</div>

<script>
const copyTarget = document.getElementById("copy-target");
const popup = document.getElementById("popup");

copyTarget.addEventListener("copy", function() {
  popup.style.display = "block";
});

popup.addEventListener("click", function() {
  popup.style.display = "none";
});
</script>
