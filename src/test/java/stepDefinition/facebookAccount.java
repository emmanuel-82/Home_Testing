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

public class facebookAccount {
    WebDriver driver = null;

    @Given("^I launch browser and am on \"([^\"]*)\"$")
    public void i_launch_browser_and_am_on(String arg1) {
        // Write code here that turns the phrase above into concrete actions
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.navigate().to("https://www.facebook.com/");
    }

    @When("^I enter valid data on the page$")
    public void i_enter_valid_data_on_the_page(DataTable table) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
        // E,K,V must be a scalar (String, Integer, Date, enum etc)
        List<List<String>> data = table.raw();
        System.out.println(data.get(1).get(1));

        driver.findElement(By.name("firstname")).sendKeys(data.get(1).get(1));
        driver.findElement(By.name("lastname")).sendKeys(data.get(2).get(1));
        driver.findElement(By.name("reg_email__")).sendKeys(data.get(3).get(1));
        driver.findElement(By.id("u_0_t")).sendKeys(data.get(4).get(1));
        driver.findElement(By.name("reg_passwd__")).sendKeys(data.get(5).get(1));


        Select dropdownB = new Select(driver.findElement(By.name("birthday_day")));
        dropdownB.selectByValue("15");

        Select dropdownM = new Select(driver.findElement(By.name("birthday_month")));
        dropdownM.selectByValue("6");

        Select dropdownY = new Select(driver.findElement(By.name("birthday_year")));
        dropdownY.selectByValue("1990");

        driver.findElement(By.id("u_0_a")).click();

    }

    @When("^I click on \"([^\"]*)\" Button$")
    public void i_click_on_Button(String arg1)  {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.name("websubmit")).click();

    }

    @Then("^the registration should be unseccessful$")
    public void the_registration_should_be_unseccessful()  {
        // Write code here that turns the phrase above into concrete actions
        if(driver.getCurrentUrl().equalsIgnoreCase("https://www.facebook.com/")) {
            System.out.println("Test Pass");
        }else{
            System.out.println("Test Failed");
        }
        //driver.close();
    }
}
