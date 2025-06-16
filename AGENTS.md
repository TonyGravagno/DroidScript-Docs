# Project description

The DroidScript Android software facilitates development of Android apps using JavaScript. User/Developers define screens, add layouts, add controls to layouts, and generate and install their APKs to use like any other app.

This repository is dedicated to the documentation for DroidScript.

- The "files" folder contains source data. Files here are edited with documentation content. This is what will be processed in tasks with the Codex assistant.
- The "docs" folder contains generated end-user documentation. The source data is run through programs to create data here. The Codex assistant does not read, use, or consider these files when processing tasks.

# The "files" folder

- The Codex assistant will only process folders and files under files/markup and files/root.
- files/markup/en : English version of documentation. This is the source for translations and will be referenced but not modified.
- files/markup/it : Italian version of documentation. This is the target for translations. Our goal is to correctly translate this folder so that it can be used by the generator code to create new end-user documentation.
- files/markup/README.md : Describes the unique schema of .js files found in the source documentation. This file will be used by the Codex assistant for information but will not be translated.
    - The assistant will ask questions about this file and the schema only if details are not clear.
- files/root/files/en : These are English source files, copies of files which are  in the files/root folder - "files". The assistant will not modified these files.
- files/root/files/it : These are initially copies of files/root/files/en files. Tasks for the assistant will lead to translation of these files into Italian.
- files/root/root/en : TThese are English source files, copied from the root of the entire project.
- files/root/root/it : Initially a copy of specific root files to be translated by the assistant into Italian.

# Tasks

All tasks to the Codex assistant are intended to progressively translate text in /it folders from English to Italian. The assistant must recognize that the documentation-specific markup is intended for the final generation process, and includes keywords that must not be modified or translated. Only text that appears to be a part of the final user-facing documentation is to be changed. When there is doubt, do not make changes, ask for clarification.

# Guidelines

## File Types

Files in this package are not what they appear. Files with extension ".js", ".md" and ".txt" and others may not conform to their standard format. This is because they are post-processed into other formats. Do not apply language-specific rules to files based on their extension. Determine the file type from the contents.

## Do not translate keywords

Consider this section from a README.md file:

```markdown
### For general purpose documentation use the **`Markdown`** file format.
See **`"en/intro"`** folder for reference.

## Parts

These are the parts of each DroidScript Doc page, in their required order. Parts may be missing or added later, as long as they are in the correct order.

- Header
- Long Description
- Samples
- Methods

### Header

The header contains information about the **Control Name**, **Short Description**, and **Initialization**. The **Initialization** also contains information about parameters and the return data type.

Example: Header of the app.Call method.

![Header part](https://drive.google.com/uc?id=1RAkKFr7M_y9Lq-useFzRliqrRtIdUmNj)
```

In that markdown block, "Header", "Long Description", "Short Description", and others are keywords that are being described. Translate the descriptions, not the keywords.

That specific refers to the schema for the documentation-specific markup in .js files. Those files contain text like this which should never be changed:

```js
// ------------- HEADER SECTION -------------
/** # AddButton # */
// ------------- LONG DESCRIPTION -------------
// ------------- SAMPLES -------------
```

The code reference to "app.Call" must not be translated. This is an object reference and a function on that object. Other objects include "ide.", "mui.", "ui.", and "cfg.".  
These object names, and function names which follow, must never be modified.  
Comments around code like this may be translated.

Another example:

```js
/** # Call #
 * @brief Calls a phone number
 * Call is used to call the given phone number.
 * $$ app.Call(number) $$
 * @param {str} number
 */
```

The @names "@brief", "@param" and others must never be modified. This are similar to but not conforming to JSDoc typedefs.   
The text "number" is a variable name which also must never be modified.  
However the text "Calls a phone number" and "given phone number" may be translated because in that case "number" does not refer to the variable.

Text in braces like "{str}" must also never be modified. These are keywords - in this case data types, which is code.
Related: `* @param {str} options px|sp|dip|dp|mm|pt`  
In this example the options are literals and must not be modified.

In the following example, text is mixed with keywords:

`* @param {str_com} [options=''] bold:bold item titles|Expand:Expand list to full height inside scrollers,Menu:applies various settings to make the list appear like an in-app menu,Horiz:makes title and body text flow horizontally,html,FontAwesome,monospace,Normal,WhiteGrad|BlackGrad|AlumButton|GreenButton|OrangeButton,NoSound`

This description for the options parameter includes keywords like "bold" and "Expand". Text to be translated follows the keyword and colon, and includes "bold item titles", "Expand list to full height inside scrollers", and "makes title and body text flow". Because other words that follow appear to be comma-delimited values which may be used. As such the keywords should not be modified.

Another example:

```markdown
See [custom tags](#custom-tags) section below.
```

Neither the text "custom tags" nor the link "#custom-tags" should be translated, as these refer to a keyword and an anchor. A task may later be dedicated to changing this pattern.

Filenames must not be changed: "Example from **`ZipFolder.js`**"  
In this example, the text "Example from" may be translated, not the filename.

Another code example:

``` js
/**
@sample Zip Folder
function OnStart()
{
    var folder = "/sdcard/DroidScript/Hello World";
	app.ZipFolder( folder, folder + ".zip" );
	app.ShowPopup( "Compressed to " + folder + ".zip" );
}
 */
```

Do not change "@sample Zip Folder". Only change "Compressed to". Everything else is code, filename, or keyword.

## HTML

Translation of English text into Italian follows common conventions but some explicit notes are provided here:

- Tag names and keywords like "class" are never modified.
- Only change text nested in elements, never "id", "href", "src", or other data-related text.

# Summary

Italian translation of sentences, explanations, and screen output will be intermixed with English keywords, filenames, function names, IDs, and abbreviated code and local syntax.

Only translate what is requested in the current task. Ask if there is confusion. Partner with your user to identify trouble spots to translate them in the most useful ways possible for the Italian DroidScript developer audience.