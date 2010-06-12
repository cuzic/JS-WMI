<package>
<?component error="true" debug="true"?>
 <comment>
WMIをラップするスクリプトコンポーネント
 </comment>
 <component id="WMIJScript_Win32_Process">
 <reference object="WbemScripting.SWbemLocator" />
 <public>
  <property name="wmiobject">
    <get /> <put />
  </property>
#{properties_str}
  <method name="Put_">
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
  </method>
  <method name="PutAsync_">
      <parameter name="objWbemSink" />
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
      <parameter name="objWbemAsyncContext" />
  </method>
  <method name="Delete_">
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
  </method>
  <method name="DeleteAsync_">
      <parameter name="objWbemSink" />
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
      <parameter name="objWbemAsyncContext" />
  </method>
  <method name="Instances_">
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
  </method>
  <method name="InstancesAsync_">
      <parameter name="objWbemSink" />
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
      <parameter name="objWbemAsyncContext" />
  </method>
  <method name="Subclasses_">
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
  </method>
  <method name="SubclassesAsync_">
      <parameter name="objWbemSink" />
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
      <parameter name="objWbemAsyncContext" />
  </method>
  <method name="Associators_">
      <parameter name="strAssocClass" />
      <parameter name="strResultClass" />
      <parameter name="strResultRole" />
      <parameter name="strRole" />
      <parameter name="bClassesOnly" />
      <parameter name="bSchemaOnly" />
      <parameter name="strRequiredAssocQualifier" />
      <parameter name="strRequiredQualifier" />
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
  </method>
  <method name="AssociatorsAsync_">
      <parameter name="objWbemSink" />
      <parameter name="strAssocClass" />
      <parameter name="strResultClass" />
      <parameter name="strResultRole" />
      <parameter name="strRole" />
      <parameter name="bClassesOnly" />
      <parameter name="bSchemaOnly" />
      <parameter name="strRequiredAssocQualifier" />
      <parameter name="strRequiredQualifier" />
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
      <parameter name="objWbemAsyncContext" />
  </method>
  <method name="References_">
      <parameter name="strResultClass" />
      <parameter name="strRole" />
      <parameter name="bClassesOnly" />
      <parameter name="bSchemaOnly" />
      <parameter name="strRequiredQualifier" />
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
  </method>
  <method name="ReferencesAsync_">
      <parameter name="objWbemSink" />
      <parameter name="strResultClass" />
      <parameter name="strRole" />
      <parameter name="bClassesOnly" />
      <parameter name="bSchemaOnly" />
      <parameter name="strRequiredQualifier" />
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
      <parameter name="objWbemAsyncContext" />
  </method>
  <method name="ExecMethod_">
      <parameter name="strMethodName" />
      <parameter name="objWbemInParameters" />
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
  </method>
  <method name="ExecMethodAsync_">
      <parameter name="objWbemSink" />
      <parameter name="strMethodName" />
      <parameter name="objWbemInParameters" />
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
      <parameter name="objWbemAsyncContext" />
  </method>
  <method name="Clone_">
  </method>
  <method name="GetObjectText_">
      <parameter name="iFlags" />
  </method>
  <method name="SpawnDerivedClass_">
      <parameter name="iFlags" />
  </method>
  <method name="SpawnInstance_">
      <parameter name="iFlags" />
  </method>
  <method name="CompareTo_">
      <parameter name="objWbemObject" />
      <parameter name="iFlags" />
  </method>
  <method name="Qualifiers_">
  </method>
  <method name="Properties_">
  </method>
  <method name="Methods_">
  </method>
  <method name="Derivation_">
  </method>
  <method name="Path_">
  </method>
  <method name="Security_">
  </method>
  <method name="Refresh_">
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
  </method>
  <method name="SystemProperties_">
  </method>
  <method name="GetText_">
      <parameter name="iObjectTextFormat" />
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
  </method>
  <method name="SetFromText_">
      <parameter name="bsText" />
      <parameter name="iObjectTextFormat" />
      <parameter name="iFlags" />
      <parameter name="objWbemNamedValueSet" />
  </method>
#{methods_str}
 </public>
 <script language="JScript">
function forEach(objectset, yield){
    for(var e = new Enumerator(objectset); !e.atEnd(); e.moveNext()){
        yield(e.item());
    }
}

var wmiobject_;

  function put_wmiobject(wmiobject){
      wmiobject_ = wmiobject;
      return null;
  }

  function get_wmiobject(){
      return wmiobject__;
  }

  function Put_(iFlags, objWbemNamedValueSet){
      if (iFlags === undefined){
        iFlags = 0;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      return wmiobject__.Put_(iFlags, objWbemNamedValueSet);
  }
  function PutAsync_(objWbemSink, iFlags, objWbemNamedValueSet, objWbemAsyncContext){
      if (iFlags === undefined){
        iFlags = 0;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      if (objWbemAsyncContext === undefined){
        objWbemAsyncContext = null;
      }
      return wmiobject_.PutAsync_(objWbemSink, iFlags, objWbemNamedValueSet, objWbemAsyncContext);
  }
  function Delete_(iFlags, objWbemNamedValueSet){
      if (iFlags === undefined){
        iFlags = 0;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      return wmiobject_.Delete_(iFlags, objWbemNamedValueSet);
  }
  function DeleteAsync_(objWbemSink, iFlags, objWbemNamedValueSet, objWbemAsyncContext){
      if (iFlags === undefined){
        iFlags = 0;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      if (objWbemAsyncContext === undefined){
        objWbemAsyncContext = null;
      }
      return wmiobject_.DeleteAsync_(objWbemSink, iFlags, objWbemNamedValueSet, objWbemAsyncContext);
  }
  function Instances_(iFlags, objWbemNamedValueSet){
      if (iFlags === undefined){
        iFlags = 16;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      return wmiobject_.Instances_(iFlags, objWbemNamedValueSet);
  }
  function InstancesAsync_(objWbemSink, iFlags, objWbemNamedValueSet, objWbemAsyncContext){
      if (iFlags === undefined){
        iFlags = 0;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      if (objWbemAsyncContext === undefined){
        objWbemAsyncContext = null;
      }
      return wmiobject_.InstancesAsync_(objWbemSink, iFlags, objWbemNamedValueSet, objWbemAsyncContext);
  }
  function Subclasses_(iFlags, objWbemNamedValueSet){
      if (iFlags === undefined){
        iFlags = 16;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      return wmiobject_.Subclasses_(iFlags, objWbemNamedValueSet);
  }
  function SubclassesAsync_(objWbemSink, iFlags, objWbemNamedValueSet, objWbemAsyncContext){
      if (iFlags === undefined){
        iFlags = 0;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      if (objWbemAsyncContext === undefined){
        objWbemAsyncContext = null;
      }
      return wmiobject_.SubclassesAsync_(objWbemSink, iFlags, objWbemNamedValueSet, objWbemAsyncContext);
  }
  function Associators_(strAssocClass, strResultClass, strResultRole, strRole, bClassesOnly, bSchemaOnly, strRequiredAssocQualifier, strRequiredQualifier, iFlags, objWbemNamedValueSet){
      if (strAssocClass === undefined){
        strAssocClass = "";
      }
      if (strResultClass === undefined){
        strResultClass = "";
      }
      if (strResultRole === undefined){
        strResultRole = "";
      }
      if (strRole === undefined){
        strRole = "";
      }
      if (bClassesOnly === undefined){
        bClassesOnly = false;
      }
      if (bSchemaOnly === undefined){
        bSchemaOnly = false;
      }
      if (strRequiredAssocQualifier === undefined){
        strRequiredAssocQualifier = "";
      }
      if (strRequiredQualifier === undefined){
        strRequiredQualifier = "";
      }
      if (iFlags === undefined){
        iFlags = 16;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      return wmiobject_.Associators_(strAssocClass, strResultClass, strResultRole, strRole, bClassesOnly, bSchemaOnly, strRequiredAssocQualifier, strRequiredQualifier, iFlags, objWbemNamedValueSet);
  }
  function AssociatorsAsync_(objWbemSink, strAssocClass, strResultClass, strResultRole, strRole, bClassesOnly, bSchemaOnly, strRequiredAssocQualifier, strRequiredQualifier, iFlags, objWbemNamedValueSet, objWbemAsyncContext){
      if (strAssocClass === undefined){
        strAssocClass = "";
      }
      if (strResultClass === undefined){
        strResultClass = "";
      }
      if (strResultRole === undefined){
        strResultRole = "";
      }
      if (strRole === undefined){
        strRole = "";
      }
      if (bClassesOnly === undefined){
        bClassesOnly = false;
      }
      if (bSchemaOnly === undefined){
        bSchemaOnly = false;
      }
      if (strRequiredAssocQualifier === undefined){
        strRequiredAssocQualifier = "";
      }
      if (strRequiredQualifier === undefined){
        strRequiredQualifier = "";
      }
      if (iFlags === undefined){
        iFlags = 0;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      if (objWbemAsyncContext === undefined){
        objWbemAsyncContext = null;
      }
      return wmiobject_.AssociatorsAsync_(objWbemSink, strAssocClass, strResultClass, strResultRole, strRole, bClassesOnly, bSchemaOnly, strRequiredAssocQualifier, strRequiredQualifier, iFlags, objWbemNamedValueSet, objWbemAsyncContext);
  }
  function References_(strResultClass, strRole, bClassesOnly, bSchemaOnly, strRequiredQualifier, iFlags, objWbemNamedValueSet){
      if (strResultClass === undefined){
        strResultClass = "";
      }
      if (strRole === undefined){
        strRole = "";
      }
      if (bClassesOnly === undefined){
        bClassesOnly = false;
      }
      if (bSchemaOnly === undefined){
        bSchemaOnly = false;
      }
      if (strRequiredQualifier === undefined){
        strRequiredQualifier = "";
      }
      if (iFlags === undefined){
        iFlags = 16;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      return wmiobject_.References_(strResultClass, strRole, bClassesOnly, bSchemaOnly, strRequiredQualifier, iFlags, objWbemNamedValueSet);
  }
  function ReferencesAsync_(objWbemSink, strResultClass, strRole, bClassesOnly, bSchemaOnly, strRequiredQualifier, iFlags, objWbemNamedValueSet, objWbemAsyncContext){
      if (strResultClass === undefined){
        strResultClass = "";
      }
      if (strRole === undefined){
        strRole = "";
      }
      if (bClassesOnly === undefined){
        bClassesOnly = false;
      }
      if (bSchemaOnly === undefined){
        bSchemaOnly = false;
      }
      if (strRequiredQualifier === undefined){
        strRequiredQualifier = "";
      }
      if (iFlags === undefined){
        iFlags = 0;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      if (objWbemAsyncContext === undefined){
        objWbemAsyncContext = null;
      }
      return wmiobject_.ReferencesAsync_(objWbemSink, strResultClass, strRole, bClassesOnly, bSchemaOnly, strRequiredQualifier, iFlags, objWbemNamedValueSet, objWbemAsyncContext);
  }
  function ExecMethod_(strMethodName, objWbemInParameters, iFlags, objWbemNamedValueSet){
      if (objWbemInParameters === undefined){
        objWbemInParameters = null;
      }
      if (iFlags === undefined){
        iFlags = 0;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      return wmiobject_.ExecMethod_(strMethodName, objWbemInParameters, iFlags, objWbemNamedValueSet);
  }
  function ExecMethodAsync_(objWbemSink, strMethodName, objWbemInParameters, iFlags, objWbemNamedValueSet, objWbemAsyncContext){
      if (objWbemInParameters === undefined){
        objWbemInParameters = null;
      }
      if (iFlags === undefined){
        iFlags = 0;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      if (objWbemAsyncContext === undefined){
        objWbemAsyncContext = null;
      }
      return wmiobject_.ExecMethodAsync_(objWbemSink, strMethodName, objWbemInParameters, iFlags, objWbemNamedValueSet, objWbemAsyncContext);
  }
  function Clone_(){
      return wmiobject_.Clone_();
  }
  function GetObjectText_(iFlags){
      if (iFlags === undefined){
        iFlags = 0;
      }
      return wmiobject_.GetObjectText_(iFlags);
  }
  function SpawnDerivedClass_(iFlags){
      if (iFlags === undefined){
        iFlags = 0;
      }
      return wmiobject_.SpawnDerivedClass_(iFlags);
  }
  function SpawnInstance_(iFlags){
      if (iFlags === undefined){
        iFlags = 0;
      }
      return wmiobject_.SpawnInstance_(iFlags);
  }
  function CompareTo_(objWbemObject, iFlags){
      if (iFlags === undefined){
        iFlags = 0;
      }
      return wmiobject_.CompareTo_(objWbemObject, iFlags);
  }
  function Qualifiers_(){
      return wmiobject_.Qualifiers_();
  }
  function Properties_(){
      return wmiobject_.Properties_();
  }
  function Methods_(){
      return wmiobject_.Methods_();
  }
  function Derivation_(){
      return wmiobject_.Derivation_();
  }
  function Path_(){
      return wmiobject_.Path_();
  }
  function Security_(){
      return wmiobject_.Security_();
  }
  function Refresh_(iFlags, objWbemNamedValueSet){
      if (iFlags === undefined){
        iFlags = 0;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      return wmiobject_.Refresh_(iFlags, objWbemNamedValueSet);
  }
  function SystemProperties_(){
      return wmiobject_.SystemProperties_();
  }
  function GetText_(iObjectTextFormat, iFlags, objWbemNamedValueSet){
      if (iFlags === undefined){
        iFlags = 0;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      return wmiobject_.GetText_(iObjectTextFormat, iFlags, objWbemNamedValueSet);
  }
  function SetFromText_(bsText, iObjectTextFormat, iFlags, objWbemNamedValueSet){
      if (iFlags === undefined){
        iFlags = 0;
      }
      if (objWbemNamedValueSet === undefined){
        objWbemNamedValueSet = null;
      }
      return wmiobject_.SetFromText_(bsText, iObjectTextFormat, iFlags, objWbemNamedValueSet);
  }
#{functions_str}

function WMIClass_convert_out_params(out_params){
    try{
        var outs = [];
        forEach(out_params.Properties_, function(out_param){
          if(out_param.Name == "ReturnValue"){
            if(out_param.Value != 0){
              throw("invalid Return Value :" + out_param.Value);
            }
          }
          else{
            outs[outs.length] = out_param.Value;
          }
        });
        switch(outs.length){
        case 0:
            return;
        case 1:
            return outs[0];
        default:
            return outs;
        }
        return outs;
    }
    catch(e){
        return e;
    }
}

 </script>
 </component>
</package>
