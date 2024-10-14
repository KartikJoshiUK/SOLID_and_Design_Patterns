import { Form, Tab } from "./Composite";
import { ElementFactory, ElementType, TextInput } from "./Element";

const form = ElementFactory.createElement(
  ElementType.FORM,
  "myform",
  "Form"
) as Form;
const tab1 = ElementFactory.createElement(
  ElementType.TAB,
  "tab1",
  "Step 1"
) as Tab;
const tab2 = ElementFactory.createElement(
  ElementType.TAB,
  "tab2",
  "Step 2"
) as Tab;
const tab3 = ElementFactory.createElement(
  ElementType.TAB,
  "tab3",
  "Step 3"
) as Tab;
form.add(tab1);
tab1.add(
  ElementFactory.createElement(
    ElementType.TEXT_INPUT,
    "name",
    "Enter your name..."
  )
);
tab1.add(
  ElementFactory.createElement(
    ElementType.TEXT_INPUT,
    "email",
    "Enter your email..."
  )
);
form.add(tab2);
tab2.add(
  ElementFactory.createElement(
    ElementType.TEXT_INPUT,
    "message",
    "Enter your message..."
  )
);
tab2.add(
  ElementFactory.createElement(
    ElementType.TEXT_INPUT,
    "comment",
    "Enter your comment..."
  )
);
form.add(tab3);
tab3.add(ElementFactory.createElement(ElementType.TEXT_INPUT, "123", "123"));
tab3.add(
  ElementFactory.createElement(
    ElementType.CHECKBOX,
    "t&c",
    "Terms and conditions"
  )
);
const elements = tab1.get() as TextInput[];

form.render("app");

form.addStyles({
  backgroundColor: "gray",
  padding: "1rem",
  borderRadius: "1rem",
});
const tabstyles: Partial<CSSStyleDeclaration> = {
  display: "flex",
  flexDirection: "column",
};
form.get().forEach((tab) => tab.addStyles(tabstyles));
form.setTabs();
