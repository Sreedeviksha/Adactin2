package com.adactin.helper;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.BookAHotel;
import com.adactin.pom.BookItinerary;
import com.adactin.pom.HomePage;
import com.adactin.pom.SearchHotel;
import com.adactin.pom.SelectHotel;

public class PageObjectManager {
	
	public static WebDriver driver;
	
	private HomePage hp;
	private SelectHotel sl;
	private SearchHotel sh;
	private BookAHotel bh;
	private BookItinerary bi;
	
	
	public PageObjectManager(WebDriver ldriver) {
		this.driver=ldriver;
	}
	
	public HomePage getHp() {
		hp = new HomePage(driver);
		return hp;
	}
	public SelectHotel getSl() {
		return sl;
	}
	public SearchHotel getSh() {
		return sh;
	}
	public BookAHotel getBh() {
		return bh;
	}
	public BookItinerary getBi() {
		return bi;
	}
	
	
	

}
