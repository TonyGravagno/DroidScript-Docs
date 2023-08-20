// ------------- HEADER SECTION ------------- 


/** # addDialog #
 * @abbrev dlg
 * @brief addDialog
 * 
 * $$ dlg = ui.addDialog(title, body, actions, options) $$ 
 * @param {str} title The dialog title text.
 * @param {str} body The dialog message to be shown.
 * @param {str} actions A comma separated text for action buttons.
 * @param {str} options A comma separated options for Dialog. Options are \n Colors: `Primary` `Secondary` \n Util: `NoCancel` prevents the dialog from closing on action.
 * @returns obj-Dialog Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a dialog into your app.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addDialog Component.
<div class="samp"><a href="#layout-0" data-transition="pop" data-rel="popup" class="ui-link">layout </a></div><div class="samp"><a href="#text-5" data-transition="pop" data-rel="popup" class="ui-link">text </a></div><div class="samp"><a href="#titlecolor-10" data-transition="pop" data-rel="popup" class="ui-link">titleColor </a></div><div class="samp"><a href="#titletext-15" data-transition="pop" data-rel="popup" class="ui-link">titleText </a></div>
<div data-role="popup" id="layout-0" class="ui-content"><p><span style="color:#4c4;">Layout</span><br>Returns the layout of the dialog where you can add custom controls.</p></div><div data-role="popup" id="text-5" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the dialog text.</p></div><div data-role="popup" id="titlecolor-10" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the title text color in hexadecimal format.</p></div><div data-role="popup" id="titletext-15" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the dialog title text.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnAction ###
 * @brief setOnAction
 * Adds a callback function when the action buttons are click *  * 
 * $$ dlg.setOnAction(callback) $$
 * @param {fnc_json} callback {"pNames":["text ","index "],"pTypes":["str-The dialog action text.","num-The index of the corresponding dialog action."]}
 */


/** ### setOnClose ###
 * @brief setOnClose
 * Adds a callback function when the dialog is close *  * 
 * $$ dlg.setOnClose(callback) $$
 * @param {} callback 
 */


/** ### show ###
 * @brief show
 * Show the dialog *  * 
 * $$ dlg.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the dialog *  * 
 * $$ dlg.hide() $$
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add button to the main layout to show the dialog when clicked.
        this.btn = ui.addButton(this.main, "Show Dialog", "Contained,Primary")
        this.btn.setOnTouch( this.showDialog )

        // Message to be displayed in the Dialog component
        var bodyText = "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        
        // Initialize the Dialog component with `Agree` and `Disagree` action buttons
        this.dlg = ui.addDialog("Use Google's location service?", bodyText, "Disagree,Agree")
    }

    showDialog()
    {
        // Show the Dialog component when the button is click.
        this.dlg.show()
    }
}
 */
    
            
    
/**
@sample NoCancel
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout.
        this.btn = ui.addButton( this.main, "Show Dialog", "Contained,Primary" )

        // Add a callback handler for `onTouch` event on the button.
        this.btn.setOnTouch( this.showDialog )

        // Message to display
        var bodyText = "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        
        // Initialize the Dialog component and pass a `NoCancel` option.
        this.dlg = ui.addDialog( "Use Google's location service?", bodyText, "Close,Agree", "NoCancel" )

        // Add a callback handler for `onAction` event on the Dialog component
        this.dlg.setOnAction( this.onAction );
    }

    showDialog()
    {
        // Show the Dialog component when button is click
        this.dlg.show();
    }

    onAction( action )
    {
        if(action == "Close")
        {
            ui.showPopup("There you go.");
            this.dlg.hide();
        }
        else
        {
            ui.showPopup("Oops! You can't close me here.");
        }
    }
}
 */
    
            
    
/**
@sample Adding controls to the dialog
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.01)

        // Adds a text control to the main layout.
        this.txt = ui.addText(this.main, "Email: ", "", 0.7)

        // Adds a button to show the dialog.
        this.btn = ui.addButton(this.main, "Show Dialog", "Contained,Primary")

        // Add a callback handler for `ontouch` event on the button control
        // to show the Dialog component
        this.btn.setOnTouch( this.showDialog )

        var bodyText = "To subscribe to this website, please enter your email address here. We will send updates occasionally."
        
        // Initialize the dialog.
        this.dlg = ui.addDialog("Subscribe", bodyText, "Cancel,Subscribe")

        // Add a callback handler for `onaction` event on the Dialog componenti
        this.dlg.setOnAction( this.onAction )

        // Adding textfield to the main layout
        this.tfd = ui.addTextField(this.dlg.layout, "", "Filled")
        this.tfd.label = "Email Address"
    }

    showDialog()
    {
        this.dlg.show()
    }

    onAction( action )
    {
        // Check the button that is click.
        if( action == "Subscribe" )
        {
            // Change the text of the text control.
            this.txt.text = "Email : " + this.tfd.text
        }
    }
}
 */
    
            