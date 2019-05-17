package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class vReset2 {

    WebDriver driver = null;

    @Given("^I am on very login and I click on the forgotten your password link$")
    public void i_am_on_very_login_and_I_click_on_the_forgotten_your_password_link() throws Throwable {

        System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.navigate().to("https://www.very.co.uk/account/login.page?from=/account/myaccount/accountSummary.page&originalURL=https%3A//www.very.co.uk/account/myaccount/accountSummary.page&_requestid=309241");

        driver.findElement(By.linkText("Forgotten your password?")).click();

    }

    @When("^I enter email as \"([^\"]*)\" and postcode as \"([^\"]*)\"$")
    public void i_enter_email_as_and_postcode_as(String arg1, String arg2)  {

        driver.findElement(By.id("forgotPwEmail")).sendKeys(arg1);
        driver.findElement(By.id("forgotPwPostcode")).sendKeys(arg2);

    }

    @When("^I enter day as \"([^\"]*)\" and month as \"([^\"]*)\" and year as \"([^\"]*)\"$")
    public void i_enter_day_as_and_month_as_and_year_as(String arg1, String arg2, String arg3)  {

        driver.findElement(By.id("forgotDay")).sendKeys(arg1);
        driver.findElement(By.id("forgotMonth")).sendKeys(arg2);
        driver.findElement(By.id("forgotYear")).sendKeys(arg3);

    }

    @When("^I clicked on Continue Button$")
    public void i_clicked_on_Continue_Button()  {

        // driver.findElement(By.id("forgotPasswordContinueButton")).click();

    }

    @Then("^I should see \"([^\"]*)\"$")
    public void i_should_see(String arg1)  {

    }





}
