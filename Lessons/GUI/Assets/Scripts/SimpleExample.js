function OnGUI() {
    GUILayout.BeginArea(Rect(0, 0, Screen.width, Screen.height));

    GUILayout.BeginHorizontal();
    GUILayout.FlexibleSpace();

    GUILayout.BeginVertical();
    GUILayout.FlexibleSpace();

    GUILayout.Label("TITLE", GUILayout.Width(100));
    GUILayout.Space(10);
    GUILayout.Button("Button 1");
    GUILayout.Space(5);
    GUILayout.Button("Button 2");
    GUILayout.Space(5);
    GUILayout.Button("Button 3");

    GUILayout.FlexibleSpace();
    GUILayout.EndVertical();

    GUILayout.FlexibleSpace();
    GUILayout.EndHorizontal();

    GUILayout.EndArea();
}
/*
var skin : GUISkin;
function OnGUI() {
    GUI.skin = skin;
    GUILayout.BeginArea(Rect(0, 0, 300, 300));
    GUILayout.BeginVertical();
    GUILayout.Label("Label あいうえお");
    GUILayout.Button("Button あいうえお");
    GUILayout.EndVertical();
    GUILayout.EndArea();
}
*/
/*
function OnGUI() {
    GUI.Label(Rect(10, 10, 100, 40), "Hello, world!");
}
*/
/*
function OnGUI() {
    if (GUI.Button(Rect(10, 10, 100, 40), "Push this!")) {
        Debug.Log("Hello!");
    }
}
*/
/*
var value : float;

function OnGUI() {
	value = GUI.HorizontalSlider(Rect(10, 10, 100, 40), value, 0, 100);
	GUI.Label(Rect(120, 10, 100, 40), value.ToString());
}
*/
/*
function OnGUI() {
    GUILayout.BeginArea(Rect(0, 0, 300, 300));
    GUILayout.BeginVertical();
    GUILayout.Button("Button 1");
    GUILayout.Button("Button 2");
    GUILayout.Button("Button 3");
    GUILayout.Button("Button 4");
    GUILayout.EndVertical();
    GUILayout.EndArea();
}
*/
/*
function OnGUI() {
    GUILayout.BeginArea(Rect(0, 0, 300, 300));
    GUILayout.BeginHorizontal();
    GUILayout.Button("Button 1");
    GUILayout.Button("Button 2");
    GUILayout.Button("Button 3");
    GUILayout.Button("Button 4");
    GUILayout.EndHorizontal();
    GUILayout.EndArea();
}
*/
/*
function OnGUI() {
    GUILayout.BeginArea(Rect(0, 0, 300, 300));
    GUILayout.BeginVertical();
    GUILayout.FlexibleSpace();
    GUILayout.Button("Button 1");
    GUILayout.Button("Button 2");
    GUILayout.Button("Button 3");
    GUILayout.FlexibleSpace();
    GUILayout.EndVertical();
    GUILayout.EndArea();
}
*/
/*
function OnGUI() {
    GUILayout.BeginArea(Rect(0, 0, 300, 300));
    GUILayout.BeginVertical();
    GUILayout.FlexibleSpace();
    GUILayout.Button("Button 1");
    GUILayout.Space(10);
    GUILayout.Button("Button 2");
    GUILayout.Space(10);
    GUILayout.Button("Button 3");
    GUILayout.FlexibleSpace();
    GUILayout.EndVertical();
    GUILayout.EndArea();
}
*/