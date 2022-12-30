<template>
    <body>

        <div id="pspdfkit-header">
            <div class="header-columns">
                <div class="logotype">
                    <img class="logo" src="https://cdn-icons-png.flaticon.com/512/9098/9098927.png">
                    <p>Bank One Ltd.</p>
                </div>

            </div>
        </div>

        <div class="page" style="page-break-after: always">
            <div>
                <h2>
                    Transactions Summary
                </h2>
            </div>

            <div class="intro-table">
                <div class="intro-form intro-form-item">
                    <p class="ion-text-capitalize">
                        Lastname : {{ userR?.last_name }}<br>
                        Firstname : {{ userR?.first_name }}<br>
                        Country : {{ userR?.country }}<br>
                        user ID : {{ userR?.id  }}
                    </p>
                </div>
            </div>
            <div>
                <p class="intro-text text-white">
                    You will find all the transaction down here for the period: {{ dateInterval.startDate }} - {{ dateInterval.endDate }}
                </p>
            </div>
        </div>

        <div class="page" style="page-break-after: always">
            <div class="table-box">
                <table cellpadding="0" cellspacing="0">
                    <tbody>
                        <div class="line">
                        <tr class="heading">
                         <td>Transaction ID</td>
                         <td>Amount</td>
                         <td>Beneficiary</td>  
                        </tr>
                    </div>
                        <br>
                        <hr>
                        <div class="item-container" v-for="tx in txs" :key="tx.id">
                            <tr class="item">
                                <td>{{ tx.id.slice(-20) }}</td>
                                <td class="item-amount">$ {{ tx.amount }}</td>
                                <td>{{ tx.beneficiary }}</td>
                            </tr>
                        </div>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="page" style="page-break-after: always">
            <div class="form">
                <label for="notes" class="label">
                    Notes:
                </label>
                <input type="text" id="notes" class="border-bottom" value="">
            </div>

            <div class="signer">
                <div class="form signer-item">
                    <label for="date" class="label">Date:</label>
                    <input type="text" id="date" class="border-bottom" :value="date">
                </div>

                <div class="form signer-item">
                    <label for="signature" class="label">Signature</label>
                    <input type="text" id="signature" class="border">
                </div>
            </div>
        </div>

        <div id="pspdfkit-footer">
            <div class="footer-columns">
                <span>Issued by Bank One Ltd.</span>
            </div>
        </div>

    </body>
</template>

<script>
// import userData from "../../utils/user/user";
// import { getPlatforms } from '@ionic/vue';
import axios from 'axios';
import {onBeforeMount, ref} from 'vue';
import {useAuthStore} from '../../stores/auth';
import { storeToRefs } from "pinia";
export default {
    props:["txs", "dateInterval"],
    setup(){
        const userR = ref(null);
        // console.log(getPlatforms());
        onBeforeMount(async() => {
            const authStore = useAuthStore();
            const {currentUser} = storeToRefs(authStore);
            const {id} = currentUser.value
            try{
                const response = await axios.get(process.env.VUE_APP_ROOT_API + '/users/' + id)
                const {user} = response.data;
                userR.value = user; 
            }catch(err){
                console.error(err);
            }
            })
        const now = new Date();
        const date = now.getMonth() + '-' + now.getDate() + '-' + now.getFullYear()
        return{
            date,
            userR,
        }
    }
}
</script>

<style scoped>


body {
    width: 100%;
    height: 100%;
    min-width: 780px;
    min-height: 1122px;
    font-size: 0.75rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: var(--ion-color-primary);
    background: white;
    margin: 0 auto;
    position: relative;
}

            .line{
                height: 100%;
                border: 1px solid black;
            }

            .line > * {
                line-height: 20px;
            }

            .heading > *{
                margin-left: 5px ;
            }
            
            .heading :nth-child(3){
                position: relative;
                right: -50px;
            }



            #pspdfkit-header {
                font-size: 0.625rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: 400;
                color: #717885;
                margin-top: 2.5rem;
                margin-bottom: 2.5rem;
                width: 100%;
            }

            .header-columns {
                display: flex;
                justify-content: space-between;
                padding-left: 2.5rem;
                padding-right: 2.5rem;
            }

            .logo {
                height: 1.5rem;
                width: auto;
                margin-right: 1rem;
            }

            .logotype {
                display: flex;
                align-items: center;
                font-weight: 700;
            }

            h2 {
                font-family: 'Space Mono', monospace;
                font-size: 1.25rem;
                font-weight: 400;
            }

            h4 {
                font-family: 'Space Mono', monospace;
                font-size: 1rem;
                font-weight: 400;
            }

            .page {
                margin-left: 5rem;
                margin-right: 5rem;
            }

            .intro-table {
                display: flex;
                margin: 3rem 0 5rem 0;
                border-top: 1px solid #000000;
                border-bottom: 1px solid #000000;
            }

            .intro-form {
                display: flex;
                border-right: 1px solid #000000;
            }

            .intro-form:last-child {
                border-right: none;
            }

            .item-amount {
                margin-left: -75px;
            }

            .intro-table-title {
                font-size: 0.625rem;
                margin: 0;
            }

            .intro-form-item {
                padding: 1.25rem 1.5rem 1.25rem 1.5rem;
            }

            .intro-form-item:first-child {
                padding-left: 0;
            }

            .intro-form-item:last-child {
                padding-right: 0;
            }

            .intro-form-item p {
                width: 100%
            }

            .intro-form-item-border {
                padding: 1.25rem 0 .75rem 1.5rem;
                border-bottom: 1px solid #000000;
            }

            .intro-form-item-border:last-child {
                border-bottom: none;
            }

            .form {
                display: flex;
                flex-direction: column;
                margin-top: 6rem;
            }

            .no-border {
                border: none;
            }

            .border {
                border: 1px solid #000000;
            }

            .border-bottom {
                border: 1px solid #000000;
                border-top: none;
                border-left: none;
                border-right: none;
            }

            .signer {
                display: flex;
                justify-content: space-between;
                gap: 2.5rem;
                margin: 2rem 0 2rem 0;
            }

            .signer-item {
                flex-grow: 1;
            }

            input {
                color: #4537DE;
                font-family: 'Space Mono', monospace;
                text-align: center;
                margin-top: 1.5rem;
                height: 4rem;
                width: 100%;
                box-sizing: border-box;
            }

            input#date, input#notes {
                text-align: left;
            }

            input#signature {
                height: 8rem;
            }

            .intro-text {
                margin-top: -32px;
                margin-bottom: 32px
            }

            .table-box table, .summary-box table {
                width: 100%;
                font-size: 0.625rem;
            }

            .table-box table {
                padding-top: 2rem;
            }

            .table-box td:first-child, .summary-box td:first-child  {
                width: 50%;
            }

            .table-box td:last-child, .summary-box td:last-child {
                text-align: right;
            }

            .table-box table tr.heading td {
                height: 1.5rem;
            }

            .heading{
                display: flex;
                justify-content: space-between;
                width: 90%;
            }

            .item {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }

            .table-box table tr.item td, .summary-box table tr.item td {
                height: 1.5rem;
            }

            .summary-box table tr.no-border-item td {
                border-bottom: none;
                height: 1.5rem;
            }

            .summary-box table tr.total td {
                border-top: 1px solid #000000;
                border-bottom: 1px solid #000000;
                height: 1.5rem;
            }

            .summary-box table tr.item td:first-child, .summary-box table tr.total td:first-child {
                border: none;
                height: 1.5rem;
            }

            #pspdfkit-footer {
                font-size: 0.5rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 500;
                color: #717885;
                margin-top: 2.5rem;
                bottom: 2.5rem;
                position: relative;
                width: 100%;
            }

            .footer-columns {
                display: flex;
                justify-content: space-between;
                padding-left: 2.5rem;
                padding-right: 2.5rem;
            }

        </style>