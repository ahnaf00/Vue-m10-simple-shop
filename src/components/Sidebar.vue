<script setup>

</script>

<template>
    <a class="navbar-brand" href="https://demos.creative-tim.com/material-kit-pro/index" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
        <b>MY SHOP</b>
    </a>
    <a href="https://www.creative-tim.com/product/material-design-system-pro#pricingCard" class="btn btn-sm  bg-gradient-primary  btn-round mb-0 ms-auto d-lg-none d-block">Buy Now</a>
    <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon mt-2">
        <span class="navbar-toggler-bar bar1"></span>
        <span class="navbar-toggler-bar bar2"></span>
        <span class="navbar-toggler-bar bar3"></span>
        </span>
    </button>
    <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover mx-auto">
            <li class="nav-item mx-2">
                <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                <h6>
                    <router-link to="/">Home</router-link>
                </h6>
                <!-- <img src="./assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1"> -->
                </a>
            </li>

            <li class="nav-item mx-2">
                <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                <h6>
                    <router-link to="/products">Shop</router-link>
                </h6>
                <!-- <img src="./assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1"> -->
                </a>
            </li>

        </ul>

        <ul class="navbar-nav d-lg-block d-none">
        <li class="nav-item">
            <a href="https://www.creative-tim.com/product/material-design-system-pro#pricingCard" class="btn btn-sm  bg-gradient-primary  mb-0 me-1" role="button">Buy Now</a>
        </li>
        </ul>
    </div>
</template>

<style scoped>

</style>