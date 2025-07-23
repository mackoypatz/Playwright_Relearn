export class hyundaiPage {
    constructor(page) {
        this.page = page;

        // login
        this.username_textbox = page.locator('[data-test="username"]');
        this.password_textbox = page.locator('[data-test="password"]');
        this.login_button = page.locator('[data-test="login-button"]');

        // add to cart
        this.addcartbackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.addcartbikelight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.addcartbolttshirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.titlelnk = page.locator('[data-test="item-5-title-link"]');
        this.lastaddcart = page.locator('[data-test="add-to-cart"]');

        // logout (prefer locator instead of getByRole for stability)
        this.openmenu = page.locator('#react-burger-menu-btn');
        this.sidemenulogout = page.locator('[data-test="logout-sidebar-link"]');
    }

    async gotothiswebsite() {
        await this.page.goto('https://www.saucedemo.com/');
        
    }

    async login(username, password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

    async addcart() {
        await this.addcartbackpack.click();
        await this.addcartbikelight.click();
        await this.addcartbolttshirt.click();
        await this.titlelnk.click();
        await this.lastaddcart.click();
    }

    async logout() {
        await this.openmenu.click();
        await this.sidemenulogout.click();
    }
}
