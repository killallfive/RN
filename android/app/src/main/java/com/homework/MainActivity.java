package com.homework;

import android.os.Bundle; // here 
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // here 
import com.imagepicker.permissions.OnImagePickerPermissionsCallback;
import com.facebook.react.modules.core.PermissionListener;

public class MainActivity extends ReactActivity {
  private PermissionListener listener;
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here 
        super.onCreate(savedInstanceState);
    }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "homeWork";
  }
}
