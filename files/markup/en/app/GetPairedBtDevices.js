// ------------- HEADER SECTION ------------- 


/** # GetPairedBtDevices #
 * @brief Get list of paired bluetooth devices
 * Returns a list of objects containing the name and bluetooth address of paired devices. Note that Bluetooth must be turned on to receive this information.
 * 
 * See Also: @UnpairBtDevice, @CreateBluetoothSerial, @DiscoverBtDevices
 * $$ app.GetPairedBtDevices() $$ 
 * @returns lst_obj-[{ name:str&comma; address:str }]
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show
var itv;

function OnStart()
{
    lay = app.CreateLayout( "linear", "fillxy,vcenter" );

    lst = app.CreateList( "", .8, .8 );
    lay.AddChild( lst );

    app.AddLayout( lay );


    if( !app.IsBluetoothEnabled() )
        app.SetBluetoothEnabled( true );

    itv = setInterval( checkBtOn, 200 );
}

function checkBtOn()
{
    if( app.IsBluetoothOn() )
    {
        app.HideProgress();
        clearInterval( itv );

        <b>var devices = app.GetPairedBtDevices();

        for( var i in devices )
            lst.AddItem( devices[i].name, devices[i].address );</b>
    }
}
 */
    
            