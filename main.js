const { remote } = require('webdriverio');

class DanaTest {
    constructor() {
        this.capabilities = {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Android',
            'appium:appPackage': 'id.dana',
            'appium:appActivity': '.onboarding.splash.LauncherActivity',
        };
    
        this.wdOpts = {
            hostname: process.env.APPIUM_HOST || 'localhost',
            port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
            logLevel: 'info',
            capabilities: this.capabilities,
        };
    }
    
    async runTest() {
        let driver;
        
        try {
            driver = await remote(this.wdOpts);
            const session = await driver.getSession();
            console.log(session);
    
            const textAreaPhone = await driver.findElement('accessibility id', 'btn-phone-number');
            await textAreaPhone.click();
    
            const phoneNumberInput = await driver.findElement('accessibility id', 'txt-area-phone-number');
            await phoneNumberInput.setValue("85162772731");
    
            const continueButton = await driver.findElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.Button");
            await continueButton.click();
    
            const cancelVerification = await driver.findElementByXPath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout');
            await cancelVerification.click();
    
            const pinInput = await driver.findElement('accessibility id', 'txt-area-pin');
            await pinInput.setValue("310899");
    
            // Perform touch actions as required
            await driver.touchAction({ actions: 'tap', x: 649, y: 379 });
            await driver.touchAction({ actions: 'tap', x: 207, y: 1321 });
            await driver.touchAction({ actions: 'tap', x: 196, y: 184 });
            
        } catch (error) {
            console.error('An error occurred:', error);
            await driver?.pause(1000000);
        } finally {
            await driver?.deleteSession();
        }
    }
}

// Instantiate the class and run the test
const test = new DanaTest();
test.runTest().catch(console.error);
