package com.crm.qa.base;


import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.crm.qa.util.TestUtil;

public class TestBase 
{
	public static WebDriver driver;
	public static Properties prop;
	
	public TestBase()
	{
		try
		{
			prop = new Properties();
			FileInputStream ip = new FileInputStream("C:\\Users\\hpspr\\eclipse-workspace\\FreeCRMTest\\src\\main\\java\\com\\crm\\qa\\config\\config.properties");
			prop.load(ip);
			}
		catch(FileNotFound Exception e)
			{
				e.printStackTrace();
			}
		catch(IOException e)
		{
			e.printStackTrace();
		}
	
		
	}
	
}

public static void initilization ()
{
	String browesrName = prop.getProperty("browser"); 
	if(browserName.equals("chrome"))
	{
		System.setProperty("webdriver.chrome.driver" , "C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
	    driver = new ChromeDriver();
	}
	driver.manage().window().maximize();
	driver.manage().deleteAllCookies();
	driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
	driver.manage().ImplicitlyWait(TestUtil.IMPLICIT_WAIT , TimeUnit.SECONDS);
	
	driver.get(prop.getProperty("url"));
	
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	}
}