// ------------- HEADER SECTION ------------- 


/** # CreateTextAreaFilledA #
 * @abbrev taf
 * Creates an active filled textarea.
 * $$ taf = MUI.CreateTextAreaFilledA(width, height, hint, label, color) $$ 
 * @param {num} width 
 * @param {num} height 
 * @param {str} hint Hint|Label text
 * @param {bin} label Hides or show label
 * @param {str_col} color 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern ClearFocus */

/** ### ClearHistory ###
 * Clear input history
 * $$ taf.ClearHistory() $$
 */


/** @extern Focus */

/** ### GetCursorLine ###
 * Get cursor line
 * $$ taf.GetCursorLine() $$
 * @returns num
 */


/** ### GetCursorPos ###
 * Get cursor position
 * $$ taf.GetCursorPos() $$
 */


/** ### GetSelectedText ###
 * 
 * $$ taf.GetSelectedText() $$
 */


/** ### GetSelectionEnd ###
 * 
 * $$ taf.GetSelectionEnd() $$
 */


/** ### GetSelectionStart ###
 * 
 * $$ taf.GetSelectionStart() $$
 */


/** @extern GetText */

/** @extern GetType */

/** @extern GetVisibility */

/** @extern Gone */

/** ### InsertText ###
 * Inserts a string at a given position.
 * $$ taf.InsertText(text, start) $$
 * @param {str} text 
 * @param {num_int} start 
 */


/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** ### Redo ###
 * Redo an undone action.
 * $$ taf.Redo() $$
 */


/** ### ReplaceText ###
 * Replaces a given range in the text with some string.
 * $$ taf.ReplaceText(text, start, end) $$
 * @param {str} text 
 * @param {num_int} start 
 * @param {num_int} end 
 */


/** ### SetCursorPos ###
 * Change the curernt cursor position.
 * $$ taf.SetCursorPos(position) $$
 * @param {num_int} position 
 */


/** @extern SetMargins */

/** @extern SetOnChange */

/** ### SetOnEnter ###
 * @brief %cb% the user pressed 'Done' or 'Enter' on the keyboard
 * %cb% the user pressed 'Done' or 'Enter' on the keyboard
 * $$ taf.SetOnEnter(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern SetPosition */

/** @extern SetText */

/** ### Undo ###
 * Undo an action
 * $$ taf.Undo() $$
 */



// ------------- SAMPLES ------------- 


    
/**
@sample No Label
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTextAreaFilledA(0.8, 0.2, "Type your name")
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample With Label
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTextAreaFilledA(0.8, 0.2, "Type your name", true)
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample SetOnEnter Callback
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        MUI.CreateTextAreaFilledA(0.8, 0.2, "Type your name", true)
        tef.SetOnEnter(OnEnter)
        lay.AddChild(tef)

    app.AddLayout(lay)
}

function OnEnter()
{
    app.ShowPopup(this.GetText())
}
 */
    
            