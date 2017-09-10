import {Component} from '@angular/core';
import {IncreaseYourEnegryPage} from "../increase-your-enegry/increase-your-enegry";
import {BoostYourImmuneSystemPage} from "../boost-your-immune-system/boost-your-immune-system";
import {BoostYourBrainFunctionPage} from "../boost-your-brain-function/boost-your-brain-function";
import {BalanceYourBloodSugarPage} from "../balance-your-blood-sugar/balance-your-blood-sugar";
import {HairTreatmentPage} from "../hair-treatment/hair-treatment";
import {HealingWoundsPage} from "../healing-wounds/healing-wounds";
import {SkinCarePage} from "../skin-care/skin-care";
import {TreatmentsForIllnessesPage} from "../treatments-for-illnesses/treatments-for-illnesses";
import {CookingPage} from "../cooking/cooking";
import {PetsPage} from "../pets/pets";
import {FurniturePolishPage} from "../furniture-polish/furniture-polish";
import {HouseholdApplicationPage} from "../household-application/household-application";
import {HowToBuyPage} from "../how-to-buy/how-to-buy";
import {NavController} from "ionic-angular";
import { AdMobFree } from '@ionic-native/admob-free';
import {AdMobConfig} from '../admobconfig';



@Component({
    selector: 'home',
    templateUrl: 'home.html'
})

export class HomePage {

    private adMobFree: AdMobFree;

    constructor(public navCtrl: NavController) {
        this.adMobFree = new AdMobFree();
        this.showBannerAd();
    }

    async showBannerAd(){

        try{
            this.adMobFree.banner.config(AdMobConfig.bannerConfig);
            const result = await this.adMobFree.banner.prepare();
            console.log('ad works fine', result);
        }
        catch(e){
            console.error(e);
        }
    }

    goEnergy() {
        this.navCtrl.push(IncreaseYourEnegryPage);
    }

    goImmune() {
        this.navCtrl.push(BoostYourImmuneSystemPage);
    }

    goBrain() {
        this.navCtrl.push(BoostYourBrainFunctionPage);
    }

    goBlood() {
        this.navCtrl.push(BalanceYourBloodSugarPage);
    }

    goHair() {
        this.navCtrl.push(HairTreatmentPage);
    }

    goWounds() {
        this.navCtrl.push(HealingWoundsPage);
    }

    goSkin() {
        this.navCtrl.push(SkinCarePage);
    }

    goIllnesses() {
        this.navCtrl.push(TreatmentsForIllnessesPage);
    }

    goCooking() {
        this.navCtrl.push(CookingPage);
    }

    goPets() {
        this.navCtrl.push(PetsPage);
    }

    goFurniture() {
        this.navCtrl.push(FurniturePolishPage);
    }

    goHousehold() {
        this.navCtrl.push(HouseholdApplicationPage);
    }

    goBuy() {
        this.navCtrl.push(HowToBuyPage);
    }
}
