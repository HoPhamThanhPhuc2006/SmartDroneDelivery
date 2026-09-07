import 'package:flutter/material.dart';

void main() {
  runApp(const SmartDroneApp());
}

class SmartDroneApp extends StatelessWidget {
  const SmartDroneApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Smart Drone Delivery',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const Scaffold(
        body: Center(
          child: Text('Smart Drone Delivery Mobile App'),
        ),
      ),
    );
  }
}