// ------------- HEADER SECTION ------------- 


/** # SetAutoBoot #
 * @brief Autostart APK when device boots
 * Causes the current running APK or its Service to be started automatically when your device boots.
 * 
 * See Also: @SetAutoStart
 * $$ app.SetAutoBoot(auto) $$ 
 * @param {str} auto App|Service|None
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Set Auto Boot
function OnStart()
{
    app.SetAutoBoot( true );
    app.ShowPopup( "You may reboot your phone now." );
}
 */
    
            
    
/**
@sample Unset Auto Boot
function OnStart()
{
    app.SetAutoBoot( false );
    app.ShowPopup( "AutoBoot Disabled." );
}
 */
    
            