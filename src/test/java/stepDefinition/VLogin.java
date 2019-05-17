package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class VLogin {

    WebDriver driver = null;

    @Given("^I am on very login page$")
    public void i_am_on_very_login_page()  {

        System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.navigate().to("https://www.very.co.uk/account/login.page?from=/account/myaccount/accountSummary.page&originalURL=https%3A//www.very.co.uk/account/myaccount/accountSummary.page&_requestid=309241");

    }

    @When("^I enter username as \"([^\"]*)\" and enter password as \"([^\"]*)\" on the login page$")
    public void i_enter_username_as_and_enter_password_as_on_the_login_page(String arg1, String arg2)  {

        driver.findElement(By.id("loginID")).sendKeys(arg1);
        driver.findElement(By.id("loginPassword")).sendKeys(arg2);

    }

    @When("^I enter postcode as \"([^\"]*)\" and I click on login button$")
    public void i_enter_postcode_as_and_I_click_on_login_button(String arg1)  {

        driver.findElement(By.id("loginPostcode")).sendKeys(arg1);
        //driver.findElement(By.className("button")).click();

    }

    @Then("^I should see a message \"([^\"]*)\"$")
    public void i_should_see_a_message(String arg1)  {

        System.out.print("<Message>");
    }

}
