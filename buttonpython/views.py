from django.shortcuts import render
from bs4 import BeautifulSoup


#to render the page
def button(request):
    return render(request,'home.html')


#to render the page when button pressed and output is put on the same page
def execute_scriptJson(request):
    #entire python script that we want to run on button press
    from selenium import webdriver
    import clipboard    #for pasting copied instance

    driver = webdriver.Chrome("/home/saksham/chromedriver")
    driver.get("https://server001.cloudehrserver.com/cot/opt/json_instance_generator")

    fileinput = driver.find_element_by_id("validatedCustomFile")
    #get path of opt from system
    path = "/home/saksham/Desktop/Internship(3rd year)/Automating Clinical Instance generation/vital_signs_summary.en.v1.opt"
    fileinput.send_keys(path)

    submitbutton = driver.find_element_by_name("doit")
    submitbutton.click()

    copybutton = driver.find_element_by_xpath("/html/body/main/section[2]/div/div/button")
    copybutton.send_keys(webdriver.common.keys.Keys.SPACE)

    docInstance = clipboard.paste()         #output from the Clinical instance generator toolkit
    driver.quit()  #close the browser
    print(docInstance)
    return render(request,'home.html',{'data':docInstance})


def execute_scriptForm(request):
    #entire python script that we want to run on button press
    from selenium import webdriver
    import clipboard    #for pasting copied instance

    driver = webdriver.Chrome("/home/saksham/chromedriver")
    driver.get("https://server001.cloudehrserver.com/cot/opt/html_form_generator")

    fileinput = driver.find_element_by_id("validatedCustomFile")
    #get path of opt from system
    path = "/home/saksham/Desktop/Internship(3rd year)/Automating Clinical Instance generation/vital_signs_summary.en.v1.opt"
    fileinput.send_keys(path)

    submitbutton = driver.find_element_by_name("doit")
    submitbutton.click()
    element = driver.find_element_by_xpath("/html/body/main/section/div/section/div")
    source_code = element.get_attribute("outerHTML")
    driver.quit()

    #source code with archetype slot errors. Remove this and send new source code
    soup = BeautifulSoup(source_code, 'html.parser')
    #change heading
    headingElement = soup.find_all('h2')
    if( len(headingElement) == 1 ):
        headingElement[0].decompose()


    #Remove archetype slot
    labelElements = soup.find_all('label')
    for label in labelElements:
        if "ARCHETYPE_SLOT" in label.text:
            label.decompose()

    data = str(soup)


    #Copy the form and render it and send it as data
    return render(request,'home.html',{'data':data})    