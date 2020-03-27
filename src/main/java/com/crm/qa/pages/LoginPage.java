package com.crm.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.crm.qa.base.TestBase;

public class LoginPage extends TestBase
{
	//page factory
	
	@FindBy(name = "username")
	WebElement username; 
	@FindBy(name = "password")
	WebElement password;
	@FindBy(xpath = "//input[@type = 'submit']")
	WebElement LoginBtn;
	
	//initilating the page object
	public LoginPage()     //constructor
	{
		PageFactory.initElements(driver, this);
	}
	//Actions
	public String ValidateLoginPageTitle()
	{
		return driver.getTitle();
	}
	
	public HomePage login (String un, String pwd)
	{
	username.sendKeys(un);
	password.sendKeys(pwd);
	LoginBtn.click();
	
	return new HomePage();
	}
	
}
