package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class login {

    WebDriver driver;

    @Given("^I am on Facebook login page$")
    public void i_am_on_Facebook_login_page() {
        System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://www.facebook.com");

    }

    @When("^I entered valid username and a valid password$")
    public void i_entered_valid_username_and_a_valid_password() throws Throwable {

        driver.findElement(By.id("email")).sendKeys("sledge@yahoo.com");
        driver.findElement(By.id("pass")).sendKeys("sledge");

    }

    @When("^I clicked on the login button$")
    public void i_clicked_on_the_login_button() throws Throwable {

        driver.findElement(By.id("loginbutton")).click();

    }

    @Then("^I should be successfully logged into Facebook$")
    public void i_should_be_successfully_logged_into_Facebook() throws Throwable {

    }
}
