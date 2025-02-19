// ------------- HEADER SECTION ------------- 


/** # GetAccounts #
 * Returns a string of all known account names on the device separated with comma ','.
 * 
 * See Also: @ChooseAccount
 * $$ app.GetAccounts() $$ 
 * @returns str_com
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Get Accounts
function OnStart()
{
    <b>var accounts = app.GetAccounts();</b>
	dlg = app.CreateListDialog( "Select an account:", accounts );
    dlg.SetOnTouch( dlg_OnTouch );
	dlg.Show();
}

function dlg_OnTouch( account )
{
	app.ShowPopup( "Selected Account: " + account );
}
 */
    
            