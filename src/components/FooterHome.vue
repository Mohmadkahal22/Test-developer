<template>
  <footer class="text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4">
          <img
            src="@/assets/icon/DEVELOPER TEST - Logo.png"
            alt="Home"
            class="me-2"
            style="width: 200px; height: 200px"
          />

          <div class="social-icons d-flex gap-3 justify-content-center mt-1">
            <a href="https://www.facebook.com/">
              <img
                src="@/assets/icon/facebook_Gold.png"
                alt="Facebook"
                style="width: 33px; height: 33px"
              />
            </a>
            <a href="https://x.com/">
              <img
                src="@/assets/icon/Twitter - Gold.png"
                alt="Twitter"
                style="width: 33px; height: 33px"
              />
            </a>
            <a href="https://www.instagram.com/">
              <img
                src="@/assets/icon/instagram_Gold.png"
                alt="Instagram"
                style="width: 33px; height: 33px"
              />
            </a>
            <a href="https://www.youtube.com/">
              <img
                src="@/assets/icon/Youtube - Gold.png"
                alt="YouTube"
                style="width: 33px; height: 33px"
              />
            </a>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="d-flex flex-column gap-4 mb-4">
            <div class="d-flex align-items-center">
              <span>Home</span>
            </div>
            <div class="d-flex align-items-center">
              <span>About us</span>
            </div>
            <div class="d-flex align-items-center">
              <span>Media center</span>
            </div>
            <div class="d-flex align-items-center">
              <span>Contact Us</span>
            </div>
          </div>
        </div>

        <div class="col-md-3 mb-4">
          <div class="d-flex flex-column gap-4">
            <div class="d-flex align-items-center">
              <span>Electronics</span>
            </div>
            <div class="d-flex align-items-center">
              <span>Jewelry</span>
            </div>
            <div class="d-flex align-items-center">
              <span>Men Clothing</span>
            </div>
            <div class="d-flex align-items-center">
              <span>Women Clothing</span>
            </div>
          </div>
        </div>

        <div class="col-md-3 mb-4">
          <div class="d-flex flex-column gap-4">
            <div class="d-flex align-items-center">
              <span style="font-size: 30px">Contact us</span>
            </div>
            <div class="d-flex align-items-center">
              <span>+971 00 000 0000</span>
            </div>
            <div class="d-flex align-items-center">
              <span>+971 0 000 0000</span>
            </div>
            <div class="d-flex align-items-center">
              <span>info@sample.com</span>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-3 bg-secondary" />

      <div class="text-center pt-3">
        <p class="mb-0">© Developer Test 2024. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
* {
  background-color: black;
  font-size: 20px;
}
footer {
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
}

.d-flex.flex-column.gap-3 {
  gap: 0.75rem;
}

.d-flex.align-items-center {
  transition: all 0.3s ease;
}

.d-flex.align-items-center:hover {
  color: #adb5bd;
  transform: translateX(5px);
}

.social-icons {
  margin-top: 0.5rem;
}

.social-icons a {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.social-icons a:hover {
  transform: translateY(-3px) scale(1.1);
  opacity: 0.8;
}

hr {
  opacity: 0.2;
}
</style>
