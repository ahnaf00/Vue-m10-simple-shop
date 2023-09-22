<script setup>
import {ref, reactive, onBeforeMount} from 'vue'
import axios from 'axios'

const products = ref([]);
onBeforeMount(()=>{
    axios.get("https://dummyjson.com/products?limit=20")
        .then(res=>{
            products.value = res.data.products
        })
})

</script>

<template>

        <div class="container">
            <section class="pt-5 pb-0">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mt-3" v-for="product in products" :key="product.id">
                            <div class="card my-3">
                                <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                                <a class="d-block blur-shadow-image">
                                    <img :src="product.thumbnail" alt="img-blur-shadow" class="img-fluid border-radius-lg">
                                </a>
                                </div>
                                <div class="card-body pt-3">
                                    <a href="javascript:;">
                                        <h5>
                                            {{ product.title }}
                                        </h5>
                                    </a>
                                    <p>
                                        <h6>
                                            Stock : {{ product.stock }}
                                        </h6>
                                        <p>
                                            <h6>
                                                Brand : {{ product.brand }}
                                            </h6>
                                        </p>
                                    </p>
                                    <h5>{{ product.price }}$</h5>
                                    <router-link :to="{name:'product', params:{id:product.id}}">
                                        <button type="button" class="btn btn-outline-primary btn-sm mb-0">View Details</button>
                                    </router-link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

</template>

<style scoped>

</style>