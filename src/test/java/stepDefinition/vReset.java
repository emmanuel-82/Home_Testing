package stepDefinition;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class vReset {

    WebDriver driver = null;

    @Given("^I am on the login page$")
    public void i_am_on_the_login_page()  {
        System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.navigate().to("https://www.very.co.uk/account/login.page?from=/account/myaccount/accountSummary.page&originalURL=https%3A//www.very.co.uk/account/myaccount/accountSummary.page&_requestid=309241");

    }

    @When("^I clicked on forgotten your password link$")
    public void i_clicked_on_forgotten_your_password_link()  {

       //driver.findElement(By.xpath("//div[contains(text(),'Forgotten your password?')]")).click();
        //driver.findElement(By.id("loginID")).sendKeys("Emmak");
        driver.findElement(By.linkText("Forgotten your password?")).click();

    }

    @When("^I entered valid data$")
    public void i_entered_valid_data(DataTable table) throws InterruptedException {

        List<List<String>> data = table.raw();
        System.out.println(data.get(1).get(1));

        driver.findElement(By.name("forgotPwEmail")).sendKeys(data.get(1).get(1));
        driver.findElement(By.name("forgotPwPostcode")).sendKeys(data.get(2).get(1));

/*
        Select dropdownB = new Select(driver.findElement(By.id("forgotDay")));
        dropdownB.selectByValue("01");

        Select dropdownM = new Select(driver.findElement(By.id("forgotMonth")));
        dropdownM.selectByValue("6");

        Select dropdownY = new Select(driver.findElement(By.id("forgotYear")));
        dropdownY.selectByValue("1978");

*/

        Select year = new Select(driver.findElement(By.id("forgotDay")));
        year.selectByVisibleText("07");
        year = new Select(driver.findElement(By.id("forgotMonth")));
        year.selectByVisibleText("June");
        year = new Select(driver.findElement(By.id("forgotYear")));
        year.selectByVisibleText("1978");
        Thread.sleep(5000);

        //driver.findElement(By.linkText("Back")).click();

    }

    @When("^I click on Continue Button$")
    public void i_click_on_Continue_Button()  {

       // driver.findElement(By.id("u_0_a")).click();

    }

    @Then("^I should successfully reset my password$")
    public void i_should_successfully_reset_my_password()  {

        driver.quit();

    }
}
