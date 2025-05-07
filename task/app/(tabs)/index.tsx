import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
// Task type definition for TypeScript
type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
};

// Sample data - you'll replace this with your actual data logic
const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    description: 'Finish the draft and send it to the team for review',
    completed: false,
    priority: 'high',
    dueDate: '2023-12-20',
  },
  {
    id: '2',
    title: 'Buy groceries',
    description: 'Milk, eggs, bread, and vegetables',
    completed: true,
    priority: 'medium',
    dueDate: '2023-12-15',
  },
  {
    id: '3',
    title: 'Schedule dentist appointment',
    description: 'Call Dr. Smith for a checkup',
    completed: false,
    priority: 'low',
    dueDate: '2023-12-30',
  },
];

export default function TaskManager() {
  // Render a single task item
  const renderTaskItem = ({ item }: { item: Task }) => {
    // Get color based on priority
    const getPriorityColor = (priority: string) => {
      switch (priority) {
        case 'high':
          return '#e74c3c';
        case 'medium':
          return '#f39c12';
        case 'low':
          return '#2ecc71';
        default:
          return Colors.light.icon;
      }
    };

    return (
      <View style={styles.taskItem}>
        <TouchableOpacity style={styles.checkboxContainer}>
          <View style={[
            styles.checkbox,
            item.completed && styles.checkboxChecked
          ]}>
            {item.completed && (
              <Ionicons name="checkmark" size={16} color="#fff" />
            )}
          </View>
        </TouchableOpacity>
        
        <View style={styles.taskContent}>
          <Text style={[
            styles.taskTitle,
            item.completed && styles.taskCompleted
          ]}>
            {item.title}
          </Text>
          <Text style={styles.taskDescription} numberOfLines={2}>
            {item.description}
          </Text>
          <View style={styles.taskFooter}>
            <View style={[
              styles.priorityBadge,
              { backgroundColor: getPriorityColor(item.priority) }
            ]}>
              <Text style={styles.priorityText}>
                {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
              </Text>
            </View>
            <Text style={styles.dueDate}>Due: {item.dueDate}</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.taskActions}>
          <Ionicons name="ellipsis-vertical" size={20} color={Colors.light.icon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Tasks</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={22} color={Colors.light.tint} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={Colors.light.icon} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search tasks..."
          placeholderTextColor={Colors.light.icon}
        />
      </View>

      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.categoryButton, styles.categoryActive]}>
            <Text style={[styles.categoryText, styles.categoryTextActive]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Completed</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <FlatList
        data={sampleTasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 60,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  filterButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 46,
    color: Colors.light.text,
    fontSize: 16,
  },
  categoriesContainer: {
    marginBottom: 20,
    paddingLeft: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#F5F5F5',
  },
  categoryActive: {
    backgroundColor: Colors.light.tint,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.light.icon,
  },
  categoryTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  taskList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  taskItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  checkboxContainer: {
    marginRight: 15,
    paddingTop: 2,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.light.tint,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: Colors.light.tint,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 5,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: Colors.light.icon,
  },
  taskDescription: {
    fontSize: 14,
    color: Colors.light.icon,
    marginBottom: 10,
  },
  taskFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  priorityText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  dueDate: {
    fontSize: 12,
    color: Colors.light.icon,
  },
  taskActions: {
    padding: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.light.tint,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
